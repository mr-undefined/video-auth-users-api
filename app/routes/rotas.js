module.exports = {
  getUsuarios: function(req, res){
    res.json({message: "Usuario encontrado! rota para GET do /usuarios"})
  },
  postUsuarios: require('../controller/controllerCriaUsuario'),
  login: require('../controller/controllerLogin'),
  getVideos: require('../controller/controllerVideos').index,
  postVideos: require('../controller/controllerVideos').store
}