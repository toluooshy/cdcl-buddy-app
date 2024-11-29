import { useEffect, useState } from "react";
import { Platform, SafeAreaView, StatusBar } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  const [webviewKey, setWebviewKey] = useState(1);

  useEffect(() => {
    if (Platform.OS === "ios") {
      setTimeout(() => setWebviewKey((key) => key + 1), 50);
    }
  }, []);

  return (
    <>
      <StatusBar
        animated={true}
        barStyle="light-content"
        backgroundColor={`${Platform.OS === "ios" ? "#323741" : "#13161d"}`}
      />
      <SafeAreaView
        style={{
          backgroundColor: "#13161d",
        }}
      ></SafeAreaView>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: Platform.OS === "ios" ? "#323741" : "#13161d",
        }}
      >
        <WebView
          key={webviewKey}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          androidHardwareAccelerationDisabled={false}
          allowsInlineMediaPlayback={true}
          allowsFullscreenVideo={true}
          userAgent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36" // Custom user agent for browser-like behavior
          source={{
            uri: "https://www.cdclbuddy.com/",
          }}
          style={{
            backgroundColor: Platform.OS === "ios" ? "#323741" : "#13161d",
          }}
        />
      </SafeAreaView>
    </>
  );
}
