/**
 * Copyright 2013-2023 the original author or authors from the JHipster project.
 *
 * This file is part of the JHipster project, see https://www.jhipster.tech/
 * for more information.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import _ from 'lodash';

/**
 * @private
 * Get Option From Array
 *
 * @param {Array} array - array
 * @param {any} option - options
 * @returns {boolean} true if option is in array and is set to 'true'
 */
const optionFromArray = (array, option) => {
  let optionValue = false;
  array.forEach(value => {
    if (_.includes(value, option)) {
      optionValue = value.split(':')[1];
    }
  });
  optionValue = optionValue === 'true' ? true : optionValue;
  return optionValue;
};

export default optionFromArray;