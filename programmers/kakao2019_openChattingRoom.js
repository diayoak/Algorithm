function solution(record) {
    let log = [];
    let users = {};
    let type = {
        Enter: "님이 들어왔습니다.",
        Leave: "님이 나갔습니다."
    };

    for (let i = 0; i < record.length; i++) {
        let [type, uid, nickname] = record[i].split(" ");

        users[uid] = nickname || users[uid];

        if (type != "Change") {
            log.push({
                type: type,
                uid: uid
            });
        }
    }

    log = log.map(x => {
        return users[x.uid] + type[x.type];
    });

    return log;
}
