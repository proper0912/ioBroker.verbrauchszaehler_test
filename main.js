'use strict';

/*
 * Created with @iobroker/create-adapter v2.1.0
 */

// The adapter-core module gives you access to the core ioBroker functions
// you need to create an adapter
const utils = require('@iobroker/adapter-core');
const adaptername = "verbrauchszaehler";
//var adapter  = utils.Adapter (adaptername);


let adapter;
function startAdapter(options) {
	options = options || {};
	Object.assign(options, {
		name: adapterName,
		ready: function () {
			try {
				adapter.log.debug("adapter.on-ready: << READY >>");

				if (adapter.config.email && adapter.config.password) {
					main();
				} else {
					adapter.log.warn('No E-Mail or Password set');
					adapter.stop();
				}
			} catch (err) {
				adapter.log.error(err);
				adapter.stop();
			}
		}
	});
	adapter = new utils.Adapter(options);

	return adapter;
};

function main() {
	adapter.log.debug("adapter.main: << MAIN >>");
}
/*
class Verbrauchszaehler extends utils.Adapter {

    /**
     * @param {Partial<utils.AdapterOptions>} [options={}]
     */
/*    constructor(options) {
        super({
            ...options,
            name: 'verbrauchszaehler',
        });
        this.on('ready', this.onReady.bind(this));
        this.on('stateChange', this.onStateChange.bind(this));
        // this.on('objectChange', this.onObjectChange.bind(this));
        // this.on('message', this.onMessage.bind(this));
        this.on('unload', this.onUnload.bind(this));
    }

    /**
     * Is called when databases are connected and adapter received configuration.
     */
/*    async onReady() {
        // Initialize your adapter here
        this.log.info('config dpoint: ' + this.config.dpoint);
        this.log.info('config mySelect: ' + this.config.mySelect);
		
		var date =  new Date().getFullYear();
		var myselect = this.config.mySelect;
		//var day = bool;
		//var week = bool;
		//var month = bool;
		//var year = bool;
		var unit;
		
		if ( myselect == "Öl" || myselect == "Wasser") {
			unit ="L";
		} else if ( myselect == "Strom") {
			unit = "kWh";
		} else {
			unit ="";
		};
		
		if (adapter.on() == true){
		adapter.setObjectNotExistsAsync (myselect + '.' + date + '.' + 'LastDay',{
			type:'state',
			common:{
				name:'Day' ,
				type:'number',
				role:'value',
				read:true,
				write:true,
				def: 0,
				unit: unit
				},
			native:{}
		});
		adapter.setObjectNotExistsAsync (myselect + '.' + date + '.' + '.Info.LastValue',{
			type:'state',
			common:{
				name:'LastValue' ,
				type:'number',
				role:'value',
				read:true,
				write:true,
				def: 0,
				unit: unit
				},
			native:{}
		});
		adapter.setObjectNotExistsAsync (myselect + '.' + date + '.' + '.Info.NewValue',{
			type:'state',
			common:{
				name:'NewValue' ,
				type:'number',
				role:'value',
				read:true,
				write:true,
				def: 0,
				unit: unit
				},
			native:{}
		});
		}
		
		adapter.subscribeStates('*');
/*
        await this.setObjectNotExistsAsync('testVariable', {
            type: 'state',
            common: {
                name: 'testVariable',
                type: 'boolean',
                role: 'indicator',
                read: true,
                write: true,
            },
            native: {},
        });
		

        // In order to get state updates, you need to subscribe to them. The following line adds a subscription for our variable we have created above.
        this.subscribeStates('testVariable');
        // You can also add a subscription for multiple states. The following line watches all states starting with "lights."
        // this.subscribeStates('lights.*');
        // Or, if you really must, you can also watch all states. Don't do this if you don't need to. Otherwise this will cause a lot of unnecessary load on the system:
        // this.subscribeStates('*');
*/
        /*
            setState examples
            you will notice that each setState will cause the stateChange event to fire (because of above subscribeStates cmd)
        */
        // the variable testVariable is set to true as command (ack=false)
/*        await this.setStateAsync('testVariable', true);

        // same thing, but the value is flagged "ack"
        // ack should be always set to true if the value is received from or acknowledged from the target system
        await this.setStateAsync('testVariable', { val: true, ack: true });

        // same thing, but the state is deleted after 30s (getState will return null afterwards)
        await this.setStateAsync('testVariable', { val: true, ack: true, expire: 30 });

        // examples for the checkPassword/checkGroup functions
        let result = await this.checkPasswordAsync('admin', 'iobroker');
        this.log.info('check user admin pw iobroker: ' + result);

        result = await this.checkGroupAsync('admin', 'admin');
       this.log.info('check group user admin group admin: ' + result);
 */ /*catch (err) {
		adapter.log.error(err);
	}
	}

    /**
     * Is called when adapter shuts down - callback has to be called under any circumstances!
     * @param {() => void} callback
     */
 /*   onUnload(callback) {
        try {
			this.log.info("cleaned everything up...");
            callback();
        } catch (e) {
            callback();
        }
    }

    // If you need to react to object changes, uncomment the following block and the corresponding line in the constructor.
    // You also need to subscribe to the objects with `this.subscribeObjects`, similar to `this.subscribeStates`.
    // /**
    //  * Is called if a subscribed object changes
    //  * @param {string} id
    //  * @param {ioBroker.Object | null | undefined} obj
    //  */
    // onObjectChange(id, obj) {
    //     if (obj) {
    //         // The object was changed
    //         this.log.info(`object ${id} changed: ${JSON.stringify(obj)}`);
    //     } else {
    //         // The object was deleted
    //         this.log.info(`object ${id} deleted`);
    //     }
    // }

    /**
     * Is called if a subscribed state changes
     * @param {string} id
     * @param {ioBroker.State | null | undefined} state
     */
 /*   onStateChange(id, state) {
        if (state) {
            // The state was changed
            this.log.info(`state ${id} changed: ${state.val} (ack = ${state.ack})`);
        } else {
            // The state was deleted
            this.log.info(`state ${id} deleted`);
        }
    }*/

    // If you need to accept messages in your adapter, uncomment the following block and the corresponding line in the constructor.
    // /**
    //  * Some message was sent to this instance over message box. Used by email, pushover, text2speech, ...
    //  * Using this method requires "common.messagebox" property to be set to true in io-package.json
    //  * @param {ioBroker.Message} obj
    //  */
    // onMessage(obj) {
    //     if (typeof obj === 'object' && obj.message) {
    //         if (obj.command === 'send') {
    //             // e.g. send email or pushover or whatever
    //             this.log.info('send command');

    //             // Send response in callback if required
    //             if (obj.callback) this.sendTo(obj.from, obj.command, 'Message received', obj.callback);
    //         }
    //     }
    // }
	
/*}*/

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