const dc = require('./discord');
const { sig } = require("./utils/sig");

(async () => {
    sig();

    await dc.initialize();
    // here is where you enter your email and password
    await dc.login('paulbrightson2030@gmail.com', 'FRIENDS2020paul')

    await dc.likeChannelProcess('server id', 'channel id', 1) // 1 = 1 minute

    debugger;

})();
