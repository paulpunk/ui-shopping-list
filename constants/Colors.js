const tintColor = "#2f95dc";

const black = "#121212";

const grey = "#F4F4F4";

export default function(navigation) {
  return !navigation.getParam("darkmode", false)
    ? {
        primary: black,
        secondary: "#fff",
        header: grey,
        background: "#fff",
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
        checkMark: require("../animation/check-light.json"),
        keyboardAppearance : "light",
      }
    : {
        primary: "#fff",
        secondary: black,
        header: "#1C1C1C",
        background: "#1C1C1C",
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
        checkMark: require("../animation/check-dark.json"),
        keyboardAppearance : "dark",
      };
}
