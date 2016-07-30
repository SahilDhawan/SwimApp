/*
 *  Licensed Materials - Property of IBM
 *  5725-I43 (C) Copyright IBM Corp. 2011, 2013. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or
 *  disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/*******************************************************************************
 * Implementation code for procedure - 'procedure1'
 * 
 * 
 * @return - invocationResult
 */
 
var procedure1Statement = WL.Server.createSQLStatement("select COLUMN1, COLUMN2 from TABLE1 where COLUMN3 = ?");
function procedure1(param) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : procedure1Statement,
		parameters : [param]
	});
}


/*******************************************************************************
 * Implementation code for procedure - 'procedure2'
 * 
 * 
 * @return - invocationResult
 */
 
function procedure2(param) {
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "storedProcedure2",
		parameters : [param]
	});
}


/*******************************************************************************
 * Functions that correspond to JSONStore client operations
 * 
 */

var selectStatement = WL.Server.createSQLStatement("select COLUMN1, COLUMN2 from TABLE1");

function getContacts() {
		
	return WL.Server.invokeSQLStatement({
		preparedStatement : selectStatement,
		parameters : []
	});
}

var addStatement = WL.Server.createSQLStatement("insert into User (Name, Address,Mobile,Email,Password) values (?, ? , ? , ? , ?)");

function addContact(Name, Address,Mobile,Email,Password) {
		
	return WL.Server.invokeSQLStatement({
		preparedStatement : addStatement,
		parameters : [Name, Address,Mobile,Email,Password]
	});
}

	
var updateStatement = WL.Server.createSQLStatement("update TABLE1 set COLUMN1=?, COLUMN2=?");

function updateContact(param1) {
		
	return WL.Server.invokeSQLStatement({
		preparedStatement : updateStatement,
		parameters : [param1]
	});
}

var deleteStatement = WL.Server.createSQLStatement("delete from TABLE1 where COLUMN1=?");

function deleteContact(param1) {
		
	return WL.Server.invokeSQLStatement({
		preparedStatement : deleteStatement,
		parameters : [param1]
	});
}
var loginStatement = WL.Server.createSQLStatement("Select * from User where Email = ? and Password = ?");
function loginContact(Email,Password){
	return WL.Server.invokeSQLStatement({
		preparedStatement : loginStatement,
		parameters : [Email,Password]
	});
}