import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  headerContainer: {
    paddingTop: 20, // Avoid overlapping with camera notch
    paddingBottom: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 12,
    textAlign: "center",
    color: "#666",
    marginBottom: 10,
  },
  error: {
    fontSize: 16,
    color: "red",
    textAlign: "center",
  },
  listContainer: {
    flex: 1, // ✅ Ensures FlatList takes full height
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 2,
    borderBottomColor: "#333",
  },
  columnHeader: {
    fontSize: 14,
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
    fontSize: 12,
    flex: 1,
    textAlign: "center",
  },
  footerContainer: {
    alignItems: "center",
    paddingVertical: 20,
  },
  footerText: {
    fontSize: 14,
    color: "#888",
  },
});

export default styles;
