var recipes = {
  key1:'value1'
}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({},object,{[key]:value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
  var object = {key: 'value'}
  var newObject = Object.assign({}, object)
  delete newObject.key
  return newObject
}

function destructivelyDeleteFromObjectByKey(obj, key){
  var obj = {key: 'prop'}
  delete obj.key
  return obj
}

destructivelyDeleteFromObjectByKey(obj, "key")
