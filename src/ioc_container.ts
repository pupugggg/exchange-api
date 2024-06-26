import {Container} from "inversify";
import {ExchangeRatio, Exchange} from "./interfaces/exchangeInterface";
import TYPES from "./constant/identifiers";
import {LocalExchangeRepository} from "./repositories/exchangeRepository";
import {ExchangeService} from "./services/exchangeService";
import "./controllers/exchangeController";
const container = new Container();
container.bind<ExchangeRatio>(TYPES.ExchangeRatio).to(LocalExchangeRepository);
container.bind<Exchange>(TYPES.Exchange).to(ExchangeService);
export default container;
