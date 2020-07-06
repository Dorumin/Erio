"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAvatar = void 0;
function getAvatar(user, size) {
    const ext = user.avatar.startsWith('a_') ? 'gif' : 'png';
    size = size || '128';
    const avatarURL = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${ext}?size=${size}`;
    return avatarURL;
}
exports.getAvatar = getAvatar;
;
