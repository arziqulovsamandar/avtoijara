"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImagesModule = void 0;
const common_1 = require("@nestjs/common");
const images_service_1 = require("./images.service");
const images_controller_1 = require("./images.controller");
const sequelize_1 = require("@nestjs/sequelize");
const image_model_1 = require("./model/image.model");
const avto_model_1 = require("../avto/model/avto.model");
let ImagesModule = exports.ImagesModule = class ImagesModule {
};
exports.ImagesModule = ImagesModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([image_model_1.Images, avto_model_1.Avto])],
        controllers: [images_controller_1.ImagesController],
        providers: [images_service_1.ImagesService],
        exports: [images_service_1.ImagesService]
    })
], ImagesModule);
//# sourceMappingURL=images.module.js.map