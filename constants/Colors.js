const tintColor = "#2f95dc";

const black = "#121212";

const grey = "#F9F9F9";

export default function(navigation) {
  return !navigation.getParam("darkmode", false)
    ? {
        primary: black,
        secondary: "#fff",
        header: grey,
        tintColor,
        tabIconDefault: "#ccc",
        tabIconSelected: tintColor,
        tabBar: "#fefefe",
        errorBackground: "red",
        errorText: "#fff",
        warningBackground: "#EAEB5E",
        warningText: "#666804",
        noticeBackground: tintColor,
        noticeText: "#fff",
        statusBar: "dark-content",
        checkMark: require("../animation/checkmark-light.json")
      }
    : {
        primary: "#fff",
        secondary: black,
        header: black,
        tintColor,
        tabIconDefault: "#ccc",
        tabIconSelected: tintColor,
        tabBar: "#fefefe",
        errorBackground: "red",
        errorText: "#fff",
        warningBackground: "#EAEB5E",
        warningText: "#666804",
        noticeBackground: tintColor,
        noticeText: "#fff",
        statusBar: "light-content",
        checkMark: require("../animation/checkmark-dark.json")
      };
}
