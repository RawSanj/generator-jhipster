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
import S3 from './s3.mjs';
import Rds from './rds.mjs';
import Eb from './eb.mjs';
import Iam from './iam.mjs';
import { handleError } from '../../base/support/index.mjs';

let Aws;
let generator;

const AwsFactory = function AwsFactory(generatorRef, cb) {
  generator = generatorRef;
  try {
    Aws = require('aws-sdk'); // eslint-disable-line
    cb();
  } catch (e) {
    handleError(generator.logguer, `Something went wrong while running jhipster:aws:\n${e}`);
  }
};

AwsFactory.prototype.init = function initAws(options) {
  Aws.config.region = options.region;
};

AwsFactory.prototype.getS3 = function getS3() {
  return new S3(Aws, generator);
};

AwsFactory.prototype.getRds = function getRds() {
  return new Rds(Aws, generator);
};

AwsFactory.prototype.getEb = function getEb() {
  return new Eb(Aws, generator);
};

AwsFactory.prototype.getIam = function getIa() {
  return new Iam(Aws, generator);
};

export default AwsFactory;
