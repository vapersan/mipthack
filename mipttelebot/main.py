import telebot

TOKEN = '860621754:AAEKrvoNHjiPXrYhSHnKA6fRU7eB54o6rmA'
bot = telebot.TeleBot(TOKEN)


# Обработчик команды start
@bot.message_handler(commands=['start'])
def command_start(message):
    bot.reply_to(message, 'Привет!\n Я создан для того что бы распозновать твои аудиосообщения и преобразовывать их в '
                          'текст.')


# Обработчик команды help
@bot.message_handler(commands=['help'])
def command_help(message):
    bot.reply_to(message, 'Тут должна быть документация, но знаешь что?\n Я слишком ленив что бы её писать...')


# Обработчик текстовых сообщений
@bot.message_handler(content_types='text')
def message_text(message):
    bot.reply_to(message, 'Эй! Я умею обрабатывать только голосовые сообщения, я не понимаю текст.')


# Обработчик голосовых сообщений
@bot.message_handler(content_types='voice')
def message_audio(message):
    # Тут должна быть передача аудиосообщения алгоритму распознования текста и дальнейший ответ бота в виде ->
    bot.reply_to(message, 'Я тебя понял!')


# Обработчик сообщений содержащих фото
@bot.message_handler(content_types='photo')
def message_text(message):
    bot.reply_to(message, 'С фотографиями я не работаю ровно так ще как и с текстом, отправь мне голосовое сообщение, '
                          'его я пойму.')


# Обработчик сообщений содержащих документ
@bot.message_handler(content_types='document')
def message_text(message):
    bot.reply_to(message, 'Это документ, я отказываюсь с ним работать')


bot.polling()
