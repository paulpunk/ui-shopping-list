const tintColor = "#2f95dc";

const black = "#121212";

const grey = "#F4F4F4";

export default function(darkmode) {
  return !darkmode
    ? {
        primary: black,
        subtitle:"#9AA6AF",
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
        loading: require("../animation/loading-light.json"),
        keyboardAppearance : "light",
      }
    : {
        primary: "#fff",
        subtitle:"#E6E6E6",
        secondary: black,
        header: "#232323",
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
        loading: require("../animation/loading-dark.json"),
        keyboardAppearance : "dark",
      };
}
