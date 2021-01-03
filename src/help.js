const help = (prefix) => {
	return `> 🤖*Comandos Bisgo's Bot*🤖 <
👉Commando : *${prefix}sticker* ou *${prefix}stiker*
☝Função : Converte imagem/gif/vídeo para sticker
👍Uso : Respondendo a imagem/gif/video, ou enviando a imagem/gif/video com a legenda\n
👉Commando : *${prefix}sticker nobg* ou *${prefix}stiker nobg*
☝Função : Converte imagem para sticker removendo o fundo
👍Uso : Responda a imagem, ou envie a imagem com a legenda\n
👉Commando : *${prefix}toimg*
☝Função : Converte o sticker para imagem
👍Uso : Responda o sticker com a legenda\n
👉Commando : *${prefix}tsticker* or *${prefix}tstiker*
☝Função : Converte texto para sticker
👍Uso : *${prefix}tsticker escreva o texto*\n
> 😂*Meme Commandos*😂 <
👉Commando : *${prefix}meme*
☝Função : Imagens de meme aleatórias [Inglês]
👍Uso : Apenas envie o Comando\n
👉command : *${prefix}memeindo*
☝Função : Imagens de meme aleatórias [Indonésio]
👍Uso : Apenas envie o comando\n
> 🤓*Outros Commandos*🤓 <
👉command : *${prefix}gtts*
☝Função : Converte texto para fala/áudio [em teste beta]
👍Uso : *${prefix}gtts [cc] [text]*\nexemplo : *${prefix}gtts ja On2-chan*\n
👉Commando : *${prefix}loli*
☝Função : Imagens aleatórias de loli
👍Uso : Apenas envie o comando\n
👉commando : *${prefix}nsfwloli*
☝Função :🔞 hentai aleatório de loli 🔞[use apenas no privado, se usar no grupo receberá advertência]
👍Uso : Apenas envie o comando\n
👉Commando : *${prefix}url2img*
☝Função : captura print da Web [em teste beta]
👍Uso : *${prefix}url2img [tipe] [url]*\n
👉Commando : *${prefix}simi*
☝Função : Sua mensagem será respondido por simi [em produção]
👍Uso : *${prefix}simi suamensagem*\n
👉Commando : *${prefix}ocr*
☝Função : Pega o texto na imagem
👍Uso : Responda a imagem, ou envie a imagem com a legenda\n
👉Commando : *${prefix}wait*
☝Função : Procura um anime a partir de uma imagem [ Qual Anime é Esse?? ]
👍Uso : Responda a imagem, ou envie a imagem com a legenda\n\n\n\n\n\n\n\n
>👨‍💻*COMANDOS ADMINISTRATIVOS*👨‍💻<\n\n\n\n\n\n
command : *${prefix}setprefix*
desc : replace prefix
usage : *${prefix}setprefix [text|optional]*\nexample : *${prefix}setprefix ?*
note : This command can only be used by the bot owner\n
> 👨‍💻*Group Comands*👨‍💻 <
command : *${prefix}add*
desc : add member into group
usage : *${prefix}add 62813xxxxx*\n
note : can only be used when the bot becomes admin, and the one who sends the command is admin!\n
command : *${prefix}kick*
desc : kick members from group
usage : *${prefix}kick @tagmember*\n
note : can only be used when the bot becomes admin, and the one who sends the command is admin!\n
command : *${prefix}promote*
desc : make the group member as group admin
usage : *${prefix}promote @tagmember*\n
note : can only be used when the bot becomes admin, and the one who sends the command is admin!\n
command : *${prefix}demote*
desc : make the group admin as group member
usage : *${prefix}demote @tagmember*\n
note : can only be used when the bot becomes admin, and the one who sends the command is admin!\n
command : *${prefix}linkgroup*
desc : take the group link
usage : just send the command
note : can only be used when the bot becomes admin, and the one who sends the command is admin!\n
command : *${prefix}leave*
desc : Make bot leave the group
usage : just send the command
note : Can only be used by Group admins and Bot owner\n
command : *${prefix}tagall*
desc : tags all group members including admins too
usage : just send the command
note : This command can be used if you are a group admin\n
command : *${prefix}simih*
desc : activate simi mode in the group
usage : *${prefix}simih 1* to activate simi mode and *${prefix}simih 0* to deactivate simi mode
note : This command can be used if you are a group admin\n`
}

exports.help = help
