import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import styles from "../styles/styles";

const FilterTab = ({ data, setFilteredData }) => {
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedWasteType, setSelectedWasteType] = useState("");
  const [sortOption, setSortOption] = useState("");

  const years = [...new Set(data.map((item) => item.year))].sort();
  const wasteTypes = [...new Set(data.map((item) => item.waste_type))].sort();

  const applyFilters = () => {
    let filtered = [...data];

    if (selectedYear) {
      filtered = filtered.filter((item) => item.year === selectedYear);
    }

    if (selectedWasteType) {
      filtered = filtered.filter((item) => item.waste_type === selectedWasteType);
    }

    if (sortOption === "year_asc") {
      filtered.sort((a, b) => a.year - b.year);
    } else if (sortOption === "year_desc") {
      filtered.sort((a, b) => b.year - a.year);
    } else if (sortOption === "rate_asc") {
      filtered.sort((a, b) => parseFloat(a.recycling_rate) - parseFloat(b.recycling_rate));
    } else if (sortOption === "rate_desc") {
      filtered.sort((a, b) => parseFloat(b.recycling_rate) - parseFloat(a.recycling_rate));
    }

    setFilteredData(filtered);
  };

  return (
    <View style={styles.filterContainer}>
      <View style={styles.filterRow}>
        {/* Year Picker */}
        <View style={styles.pickerWrapper}>
          <Text style={styles.filterLabel}>Year</Text>
          <Text style={styles.selectedText}>{selectedYear || "All"}</Text> {/* Shows the selected value */}
          <Picker
            selectedValue={selectedYear}
            onValueChange={(value) => setSelectedYear(value)}
            style={styles.picker}
            mode="dropdown"
          >
            <Picker.Item label="All" value="" />
            {years.map((year) => (
              <Picker.Item key={year} label={year.toString()} value={year} />
            ))}
          </Picker>
        </View>

        {/* Waste Type Picker */}
        <View style={styles.pickerWrapper}>
          <Text style={styles.filterLabel}>Waste</Text>
          <Text style={styles.selectedText}>{selectedWasteType || "All"}</Text> {/* Shows the selected value */}
          <Picker
            selectedValue={selectedWasteType}
            onValueChange={(value) => setSelectedWasteType(value)}
            style={styles.picker}
            mode="dropdown"
          >
            <Picker.Item label="All" value="" />
            {wasteTypes.map((type) => (
              <Picker.Item key={type} label={type} value={type} />
            ))}
          </Picker>
        </View>

        {/* Sorting Picker */}
        <View style={styles.pickerWrapper}>
          <Text style={styles.filterLabel}>Sort</Text>
          <Text style={styles.selectedText}>
            {sortOption === "year_asc" ? "Year ↑" :
             sortOption === "year_desc" ? "Year ↓" :
             sortOption === "rate_asc" ? "Rate ↑" :
             sortOption === "rate_desc" ? "Rate ↓" :
             "None"}
          </Text> {/* Shows the selected value */}
          <Picker
            selectedValue={sortOption}
            onValueChange={(value) => setSortOption(value)}
            style={styles.picker}
            mode="dropdown"
          >
            <Picker.Item label="None" value="" />
            <Picker.Item label="Year ↑" value="year_asc" />
            <Picker.Item label="Year ↓" value="year_desc" />
            <Picker.Item label="Rate ↑" value="rate_asc" />
            <Picker.Item label="Rate ↓" value="rate_desc" />
          </Picker>
        </View>
      </View>

      {/* Apply Button */}
      <TouchableOpacity style={styles.filterButton} onPress={applyFilters}>
        <Text style={styles.filterButtonText}>Apply</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FilterTab;
