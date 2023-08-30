"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkerController = void 0;
const common_1 = require("@nestjs/common");
const worker_service_1 = require("./worker.service");
const create_worker_dto_1 = require("./dto/create-worker.dto");
const update_worker_dto_1 = require("./dto/update-worker.dto");
const swagger_1 = require("@nestjs/swagger");
const cookieGetter_decorator_1 = require("../decorators/cookieGetter.decorator");
const worker_model_1 = require("./model/worker.model");
const login_worker_dto_1 = require("./dto/login-worker.dto");
const jwt_guard_1 = require("../guards/jwt.guard");
const admin_guard_1 = require("../guards/admin.guard");
const worker_guard_1 = require("../guards/worker.guard");
const self_guard_1 = require("../guards/self.guard");
let WorkerController = exports.WorkerController = class WorkerController {
    constructor(workerService) {
        this.workerService = workerService;
    }
    registration(createWorkerDto, res) {
        return this.workerService.registration(createWorkerDto, res);
    }
    login(loginWorkerDto, res) {
        return this.workerService.login(loginWorkerDto, res);
    }
    logout(refreshToken, res) {
        return this.workerService.logout(refreshToken, res);
    }
    findAll() {
        return this.workerService.findAll();
    }
    findOne(id) {
        return this.workerService.findOne(+id);
    }
    update(id, updateWorkerDto, refreshToken) {
        return this.workerService.update(+id, updateWorkerDto, refreshToken);
    }
    remove(id, refreshToken) {
        return this.workerService.remove(+id, refreshToken);
    }
    activate(link) {
        return this.workerService.activate(link);
    }
    refresh(id, refreshToken, res) {
        return this.workerService.refreshToken(+id, refreshToken, res);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Yangi worker qo'shish" }),
    (0, common_1.Post)("registration"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_worker_dto_1.CreateWorkerDto, Object]),
    __metadata("design:returntype", void 0)
], WorkerController.prototype, "registration", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Worker tizimga kirishi" }),
    (0, common_1.Post)("login"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_worker_dto_1.LoginWorkerDto, Object]),
    __metadata("design:returntype", void 0)
], WorkerController.prototype, "login", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Worker tizimdan chiqishi" }),
    (0, common_1.Post)("logout"),
    __param(0, (0, cookieGetter_decorator_1.CookieGetter)("refresh_token")),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], WorkerController.prototype, "logout", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard, admin_guard_1.AdminGuard),
    (0, swagger_1.ApiOperation)({ summary: "Workerlarni ko'rish" }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WorkerController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard, worker_guard_1.WorkerGuard, self_guard_1.SelfGuard),
    (0, swagger_1.ApiOperation)({ summary: "Workerni id orqali ko'rish" }),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WorkerController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard, worker_guard_1.WorkerGuard, self_guard_1.SelfGuard),
    (0, swagger_1.ApiOperation)({ summary: "Workerni id orqali yangilash" }),
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, cookieGetter_decorator_1.CookieGetter)("refresh_token")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_worker_dto_1.UpdateWorkerDto, String]),
    __metadata("design:returntype", void 0)
], WorkerController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard, worker_guard_1.WorkerGuard, self_guard_1.SelfGuard),
    (0, swagger_1.ApiOperation)({ summary: "Workerni id orqali o'chirish" }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, cookieGetter_decorator_1.CookieGetter)("refresh_token")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], WorkerController.prototype, "remove", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Workerni activate qilish" }),
    (0, swagger_1.ApiResponse)({ status: 200, type: worker_model_1.Worker }),
    (0, common_1.Get)("activate/:link"),
    __param(0, (0, common_1.Param)("link")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WorkerController.prototype, "activate", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard, worker_guard_1.WorkerGuard, self_guard_1.SelfGuard),
    (0, swagger_1.ApiOperation)({ summary: "Foydalanuvchi tokenini yangilash" }),
    (0, swagger_1.ApiResponse)({ status: 200, type: worker_model_1.Worker }),
    (0, common_1.Post)(":id/refresh"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, cookieGetter_decorator_1.CookieGetter)("refresh_token")),
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], WorkerController.prototype, "refresh", null);
exports.WorkerController = WorkerController = __decorate([
    (0, swagger_1.ApiTags)("Worker"),
    (0, common_1.Controller)("worker"),
    __metadata("design:paramtypes", [worker_service_1.WorkerService])
], WorkerController);
//# sourceMappingURL=worker.controller.js.map