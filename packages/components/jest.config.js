module.exports = {
  preset: 'ts-jest', // 使用 ts-jest 解析 TypeScript
  testEnvironment: 'jsdom', // 模拟浏览器的 DOM 环境
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'], // 运行测试前的垫片配置
  moduleNameMapper: {
    // 遇到 scss 模块时，用 identity-obj-proxy 代理
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};
