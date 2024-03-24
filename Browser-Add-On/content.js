function findYouTubeLinks() {
    var currentURL = window.location.href;

    if (currentURL.includes('/shorts/') || currentURL.includes('/watch')) {
        sendDataToBackend(currentURL)
    }
}

function findTikTokLinks() {
//    const videoElement = document.querySelector('video'); 
//    console.log(videoElement);

//    if (videoElement && videoElement.src) {
//        return sendDataToBackend(videoElement.src); 
//    } else {
//        return null;
//    }
    var currentURL = window.location.href;
    if (currentURL.includes('tiktok.com') && currentURL.includes('/video')) {
        sendDataToBackend(currentURL)
    }
}

function sendDataToBackend(videoUrl) {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://9ff8-34-125-50-131.ngrok-free.app", true); 
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function() {
     if (xhr.readyState === 4 && xhr.status === 200) {
         console.log("Video URL sent successfully!");
     }
  };
  xhr.send(JSON.stringify({ url: videoUrl }));
}

// Call the function to start detecting links
findYouTubeLinks();
findTikTokLinks();

