const mongoose= require('mongoose')
//module.exports= mongoose.connect('mongodb://localhost:27017/db_finance')
module.exports= mongoose.connect('mongodb://localhost/db_finance')

mongoose.Error.messages.general.required="O atributo '{PATH}' é obrigátorio"
mongoose.Error.messages.Number.min="O '{VALUE}' informado é menor do que o limite mínimo de '{MIN}'"
mongoose.Error.messages.Number.max="O '{VALUE}' informado é maior do que o limite máximo de '{MAX}'"
mongoose.Error.messages.String.enum=" '{VALUE}' não é valido para o atributo '{PATH}'"

