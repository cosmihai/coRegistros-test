'use strict'

function setStoreId(zipcode) {
  if (zipcode==='08456') return 'CO1234'
  else if (zipcode==='09789') return 'CO5678'
  else if (zipcode==='04536') return 'ES3456'
  else return 'unvalid zipcode'
}

module.exports = setStoreId;