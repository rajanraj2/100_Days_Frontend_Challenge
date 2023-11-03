// Add code to show Network Info when the button is clicked
document.getElementById("getNetworkInfo").addEventListener("click", function () {
    const networkInfoContainer = document.getElementById("networkInfoContainer");
  
    if ("connection" in navigator) {
      const connection = navigator.connection;
  
      const networkInfo = {
        effectiveType: connection.effectiveType,
        downlink: connection.downlink,
        saveData: connection.saveData,
        rtt: connection.rtt,
      };
  
      const infoText = `
        Effective Type: ${networkInfo.effectiveType}<br>
        Downlink: ${networkInfo.downlink} Mbps<br>
        Save Data: ${networkInfo.saveData ? "On" : "Off"}<br>
        RTT: ${networkInfo.rtt} ms
      `;
  
      networkInfoContainer.innerHTML = infoText;
    } else {
      networkInfoContainer.innerHTML = "Network Information API is not supported in this browser.";
    }
  });
  