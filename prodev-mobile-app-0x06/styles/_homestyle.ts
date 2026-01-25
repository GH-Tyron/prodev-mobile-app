import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    searchGroup: {
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 10,
        backgroundColor: "#fff",
    },

    searchFormGroup: {
        flexDirection: "row",
        alignItems: "center",
        columnGap: 10,
    },

    searchControlGroup: {
        flex: 1,
    },

    searchFormText: {
        fontSize: 14,
        fontWeight: "400",
    },

    searchControl: {
        height: 48,
        borderWidth: 1,
        borderColor: "#E9E9E9",
        borderRadius: 12,
        paddingHorizontal: 10,
        marginTop: 6,
    },

    searchButton: {
        width: 48,
        height: 48,
        backgroundColor: "#34967C",
        borderRadius: 24,
        alignItems: "center",
        justifyContent: "center",
    },

    filterGroup: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        columnGap: 20,
    },

    filterContainer: {
        alignItems: "center",
        width: 70,
    },

    listingContainer: {
        paddingHorizontal: 20,
        marginTop: 10,
    },

    paginationContainer: {
        marginVertical: 20,
        alignItems: "center",
    },

    showMoreButton: {
        borderWidth: 1,
        borderColor: "#34967C",
        borderRadius: 30,
        paddingHorizontal: 30,
        paddingVertical: 10,
    },

    showMoreButtonText: {
        color: "#34967C",
        fontSize: 16,
        fontWeight: "500",
    },
});

export { styles };

