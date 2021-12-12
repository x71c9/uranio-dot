/**
 * Express index module
 *
 * @packageDocumentation
 */

import {urn_log} from 'urn-lib';

urn_log.defaults.log_level = urn_log.LogLevel.FUNCTION_DEBUG;

import uranio from '../index';

console.log(uranio.lib.log.defaults);

const express_service = uranio.api.service.create();

express_service.listen(3000, () => {
	urn_log.debug(`Listening on port 3000...`);
});
