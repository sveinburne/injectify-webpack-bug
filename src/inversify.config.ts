import 'reflect-metadata'  // DI with inversify
import { Container } from 'inversify'

const container = new Container()

container.bind<string>('string')
  .toConstantValue('https://my.domain/')
  .whenTargetNamed('config-url')

export default container
