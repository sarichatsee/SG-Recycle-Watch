import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#E8F5E9", // 🌿 Light Green Background
  },
  headerContainer: {
    paddingTop: 20,
    paddingBottom: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#2E7D32", // 🌱 Dark Green
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 12,
    textAlign: "center",
    color: "#4CAF50", // 🍃 Medium Green
    marginBottom: 10,
  },
  searchBox: {
    height: 40,
    borderColor: "#66BB6A", // 🍀 Green Border
    borderWidth: 1.5,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "#F1F8E9", // 🍏 Light Green
  },
  filterContainer: {
    backgroundColor: "#C8E6C9", // 🌲 Light Green Card
    borderRadius: 8,
    padding: 8,
    marginBottom: 10,
  },
  filterRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pickerWrapper: {
    flex: 1,
    marginHorizontal: 5,
  },
  picker: {
    height: 35,
    fontSize: 12,
    color: "#1B5E20", // 🍀 Dark Green Text
  },
  filterLabel: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: -5,
    color: "#388E3C", // 🌿 Slightly Dark Green
  },
  filterButton: {
    backgroundColor: "#81C784", // 🍃 Soft Green Button
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
    alignSelf: "center",
    marginTop: 5,
  },
  filterButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    backgroundColor: "#A5D6A7", // 🌿 Muted Green
    borderBottomWidth: 2,
    borderBottomColor: "#388E3C",
  },
  columnHeader: {
    fontSize: 14,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
    color: "#1B5E20", // 🍀 Deep Green
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#C5E1A5", // 🍃 Light Green Accent
  },
  cell: {
    fontSize: 12,
    flex: 1,
    textAlign: "center",
    color: "#2E7D32", // 🌱 Plant Green
  },
  item: {
    backgroundColor: "#DCEDC8", // 🌿 Soft Green Background
    padding: 16,
    marginBottom: 10,
    borderRadius: 8,
    shadowOpacity: 0.1,
    elevation: 2,
  },
  detailTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#2E7D32", // 🌱 Title Green
  },
  detailText: {
    fontSize: 16,
    marginBottom: 5,
    color: "#1B5E20", // 🍀 Dark Green
  },
  bowserGif: {
    width: 150, // Adjust size as needed
    height: 150,
    alignSelf: "center",
    marginTop: 20,
  },
  
});

export default styles;

