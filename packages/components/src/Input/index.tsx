// packages/components/src/Input/index.tsx
import { InternalInput } from './Input';
import { Password } from './Password';

// 1. 定义极其优雅的组合类型
type CompoundedComponent = typeof InternalInput & {
  Password: typeof Password;
};

// 2. 类型断言，强行将 Password 挂载到 Input 上
const Input = InternalInput as CompoundedComponent;
Input.Password = Password;

// 3. 干净利落地向外暴露
export { Input };
