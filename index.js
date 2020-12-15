class Formatter {
  //add static methods here
  static  capitalize(a ){
  return  a .charAt(0).toUpperCase()+a .slice(1)
  }

  static sanitize(a){
  return a.replace( /[^A-Za-z0-9 '-]/g, '')
  }


}
