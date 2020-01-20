myFetch.init({
    address: "https://api.spotify.com/v1/browse/",
    key: "Bearer BQAT3CpcFbalnM3OOisXdhy2tQKCqiAcabilqkzwtglQXpr8OCEpklyLrk9_3-RqKsBtzyChvXPprBPv6E0RyGNxqQX8PR3IRMX-85uIcg3GafYHZZ4h8ORhumSM57Abna919gpg6cuc-HI"
});

myFetch.get("featured-playlists").then(result => console.log(result));