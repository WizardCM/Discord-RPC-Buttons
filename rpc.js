const RPC = require('discord-rpc');
const client = new RPC.Client({
    transport: 'ipc'
});

client.on('ready', () => {
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: "If you can see this youre cool",
            state: "Discord Bot Developer",
            timestamps: {
                start: Date.now()
            },
            assets: {
                large_image: "", //large image name from the discord developer portal
                large_text: "", //text for the large image if you hover it
                small_image: "", //small image name from the discord developer portal
                small_text: "" //text for the small image if you hover it
            },
            buttons: [
                { label: "Label 1", url: "Label 1 Link" },
                { label: "Label 2", url: "Label 2 Link" }
            ]
        }
    });
});

client.login({
    clientId: '', //client id
    clientSecret: '' //client secret
});