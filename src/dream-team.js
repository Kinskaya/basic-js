const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (Array.isArray(members) !== true) {
        return false;
    } else {
        let membersNew = [];
        for (let i = 0; i < members.length; i++) {
            let type = typeof members[i];
            if (type === 'string') {
                membersNew[i] = members[i].trim();
            }
        }
        let members2 = membersNew.map(function(num) {
            return num[0].toUpperCase();
        });
        return members2.sort().join('');
    }
};
