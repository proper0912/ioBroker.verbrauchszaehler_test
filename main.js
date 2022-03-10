'use strict';

/*
 * Created with @iobroker/create-adapter v2.1.0
 */

// The adapter-core module gives you access to the core ioBroker functions
// you need to create an adapter
const utils = require('@iobroker/adapter-core');
const {default: axios} = require('axios');
const objects = require('./lib/object_definition');
//const adaptername = "verbrauchszaehler";
var adapter  = utils.Adapter('verbrauchszaehler');
const faceObjects = objects.object_connection;





class Verbrauchszaehler extends utils.Adapter {

    /**
     * @param {Partial<utils.AdapterOptions>} [options={}]
     */
    constructor(options) {
        super({
            ...options,
            name: 'verbrauchszaehler'
        });
        this.on('ready', this.onReady.bind(this));
        this.on('stateChange', this.onStateChange.bind(this));
		this.on('unload', this.onUnload.bind(this));
        // this.on('objectChange', this.onObjectChange.bind(this));
        // this.on('message', this.onMessage.bind(this));
    }
	    /**
     * Is called when databases are connected and adapter received configuration.
     */
	async onReady() {

		// Reset the connection indicator during startup
		adapter.setState('info.connection', false, true);

		// Initialize your adapter here
		await this.initialization();
		adapter.setState('info.connection', true, true);
		//await this.request();
	}
	
	async initialization() {
		try {
			
			this.log.debug("prepare adapter for initialization");
			
			const devices = this.config.devices;
			
			if (true) {
				// if (stateDelete) {
				// 	await this.localDeleteState();
				// }
				this.log.debug("Adapter has been fully initialized");
			}
			else {
				deviceEnabled[1] = false
			}
		}
		catch (error) {
			this.log.error("initialization has a problem: ${error.message}, stack: ${error.stack}");
		}
	}
	
	async create_State() {
		try {
			this.log.debug("preparation for the statesCreate...");
			
			await this.setObjectNotExistsAsync(`info.connection`, {
							type: 'channel',
							common: {
								name: `info connection`
							},
							native: {}
						});

						for (const obj in faceObjects) {
							await this.setObjectNotExistsAsync(`info.connection.${obj}`, faceObjects[obj]);
						}
			this.log.debug("subscribe to all stats in the command folder");
			this.log.info("info message"); 
		}
		catch (error) {
			this.log.error("stateCreate has a problem");
		}
	}

    /**
     * Is called when adapter shuts down - callback has to be called under any circumstances!
     * @param {() => void} callback
     */
    onUnload(callback) {
        try {
			this.log.info("cleaned everything up...");
            callback();
        } catch (e) {
            callback();
        }
    }


    /**
     * Is called if a subscribed state changes
     * @param {string} id
     * @param {ioBroker.State | null | undefined} state
     */
    onStateChange(id, state) {
        if (state) {
            // The state was changed
            this.log.info("TEST");
        } else {
            // The state was deleted
            this.log.info("TEST");
        }
    }

	
}

if (module.parent) {
    // Export the constructor in compact mode
    /**
     * @param {Partial<utils.AdapterOptions>} [options={}]
     */
    module.exports = (options) => new Verbrauchszaehler(options);
} else {
    // otherwise start the instance directly
    new Verbrauchszaehler();
}