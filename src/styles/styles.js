import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  headerContainer: {
    paddingTop: 20, // Extra padding to avoid overlapping with camera notch
    paddingBottom: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#666",
    marginBottom: 10,
  },
  error: {
    fontSize: 16,
    color: "red",
    textAlign: "center",
  },
  tableContainer: {
    flex: 1,
    marginHorizontal: 5, // Prevents text from touching screen edges
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 2,
    borderBottomColor: "#333",
  },
  columnHeader: {
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  cell: {
    fontSize: 14,
    flex: 1,
    textAlign: "center",
  },
});

export default styles;
