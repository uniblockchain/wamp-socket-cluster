'use strict';
const eth = require('ethjs-rpc');

const socketCluster = require('./server').getInstance();

const Client = require('./client');

setTimeout(function () {

	const c = new Client();
	c.connect();
	c.callRPCInInterval();

}, 1000);


