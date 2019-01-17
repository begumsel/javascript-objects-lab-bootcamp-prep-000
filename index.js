<<<<<<< HEAD
  var recipes = {}

  function updateObjectWithKeyAndValue(object, key, value){
    return Object.assign({}, object, {[key]: value })
}
  function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
    object[key] = value
    return object
  }
  function deleteFromObjectByKey(object, key){
    var newObj = Object.assign({}, object)
    return delete newObj.key
  }
  function destructivelyDeleteFromObjectByKey(object, key){
    return delete object[key]
=======
function Objects(){
  recipes = {prop: 1}
}
  
  function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, recipes, { prop2: ['2'] })
}

  function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
    return recipes.prop2='2'
  }
  function deleteFromObjectByKey(object, key){
    var newObj = Oject.assign({}, recipes)
    return delete newObj.prop2
  }
  function destructivelyDeleteFromObjectByKey(object, key){
  return recipes.prop
>>>>>>> e9197d1072ca3fe77a2d144645d0d1f28dd0ea79
}


