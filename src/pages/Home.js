import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"; // ✅ Import SafeAreaView
import styles from "../styles/styles";

const datasetId = "d_9740df787da2b59a0b5bd76a6c33453d";
const baseUrl = "https://data.gov.sg/api/action/datastore_search";

const Home = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            let allData = [];
            let offset = 0;
            let hasMoreData = true;

            while (hasMoreData) {
                const rowFilters = JSON.stringify({
                    year: { type: "ILIKE", value: "" }
                });

                const url = `${baseUrl}?resource_id=${datasetId}&filters=${encodeURIComponent(rowFilters)}&offset=${offset}&limit=100`;

                const response = await fetch(url);
                const json = await response.json();

                if (json.result && json.result.records.length > 0) {
                    allData = [...allData, ...json.result.records];
                    offset += 100;
                } else {
                    hasMoreData = false;
                }
            }

            const filteredData = allData.filter(
                item => parseInt(item.year) >= 2000 && parseInt(item.year) <= 2015
            );

            setData(filteredData);
            setLoading(false);
        } catch (err) {
            console.error("Error fetching data:", err);
            setError(err.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>Recycling Rates by Waste Type</Text>
                <Text style={styles.subtitle}>Data from Jan 2000 to Dec 2015</Text>
            </View>

            {loading ? (
                <ActivityIndicator size="large" color="blue" />
            ) : error ? (
                <Text style={styles.error}>Error: {error}</Text>
            ) : (
                <View style={styles.tableContainer}>
                    {/* Table Header */}
                    <View style={styles.tableHeader}>
                        <Text style={styles.columnHeader}>Year</Text>
                        <Text style={styles.columnHeader}>Waste Type</Text>
                        <Text style={styles.columnHeader}>Recycling Rate</Text>
                    </View>

                    {/* Data List */}
                    <FlatList
                        data={data}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.tableRow}>
                                <Text style={styles.cell}>{item["year"] || "N/A"}</Text>
                                <Text style={styles.cell}>{item["waste_type"] || "Unknown"}</Text>
                                <Text style={styles.cell}>{item["recycling_rate"] ? `${item["recycling_rate"]}%` : "N/A"}</Text>
                            </View>
                        )}
                    />
                </View>
            )}
        </SafeAreaView>
    );
};

export default Home;
