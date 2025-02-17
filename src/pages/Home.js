import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    FlatList,
    TextInput,
    ActivityIndicator,
    TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/styles";
import FilterTab from "../components/FilterTab";

// API configuration to fetch dataset from data.gov.sg
const datasetId = "d_9740df787da2b59a0b5bd76a6c33453d";
const baseUrl = "https://data.gov.sg/api/action/datastore_search";

const Home = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigation = useNavigation();

    const fetchData = async () => {
        try {
            let allData = [];
            let offset = 0;
            let hasMoreData = true;

            while (hasMoreData) {
                const url = `${baseUrl}?resource_id=${datasetId}&offset=${offset}&limit=100`;
                const response = await fetch(url);
                const json = await response.json();

                if (json.result && json.result.records.length > 0) {
                    allData = [...allData, ...json.result.records];
                    offset += 100;
                } else {
                    hasMoreData = false;
                }
            }

            const filtered = allData.filter(
                (item) => parseInt(item.year) >= 2000 && parseInt(item.year) <= 2015
            );

            setData(filtered);
            setFilteredData(filtered);
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

    const handleSearch = (query) => {
        setSearchQuery(query);
        const filtered = data.filter((item) =>
            item.waste_type.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredData(filtered);
    };

    return (
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>♻️ Recycling Rates by Waste Type 🍃</Text>
                <Text style={styles.subtitle}>📊 Data from Jan 2000 to Dec 2015</Text>

            </View>

            {/* 🔍 Search Box */}
            <TextInput
                style={styles.searchBox}
                placeholder="Search waste type..."
                value={searchQuery}
                onChangeText={handleSearch}
            />

            {/* 🛠 Filter Component */}
            <FilterTab data={data} setFilteredData={setFilteredData} />

            {loading ? (
                <ActivityIndicator size="large" color="blue" />
            ) : error ? (
                <Text style={styles.error}>Error: {error}</Text>
            ) : (
                <FlatList
                    data={filteredData}
                    keyExtractor={(item, index) => index.toString()}
                    ListHeaderComponent={
                        <View style={styles.tableHeader}>
                            <Text style={styles.columnHeader}>Year</Text>
                            <Text style={styles.columnHeader}>Waste Type</Text>
                            <Text style={styles.columnHeader}>Recycling Rate</Text>
                        </View>
                    }
                    ListFooterComponent={ // ✅ Correctly placing the footer here
                        <View>
                          <Text style={styles.subtitle}>You've reached the bottom :3</Text>
                        </View>
                      }
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.tableRow}
                            onPress={() => navigation.navigate("Details", { item })}
                        >
                            <Text style={styles.cell}>{item.year || "N/A"}</Text>
                            <Text style={styles.cell}>{item.waste_type || "Unknown"}</Text>
                            <Text style={styles.cell}>
                                {item.recycling_rate ? `${item.recycling_rate}%` : "N/A"}
                            </Text>
                        </TouchableOpacity>
                    )}
                />
            )}
        </SafeAreaView>
    );
};

export default Home;
