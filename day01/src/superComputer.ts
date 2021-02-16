enum Symbols {
    ADD = '+',
    SUB = '-',
    DIV = '/',
    MUL = '*',
    MOD = '%'
}

type Callback = {
    (err: Error, result?: undefined): Error,
    (err: null, result: number): number
};

function callback(err: Error, result?: undefined): Error;
function callback(err: null, result: number): number;

function callback(err: Error | null, result: any): Error | number {
  if (err) {
    console.log(err.message);
    return err;
  }
  console.log(`Result: ${result}`);
  return result;
}

function superComputer(nb1: number, sym: Symbols, nb2: number, callback: Callback) {
  let result;
  let err;
  switch (sym) {
    case Symbols.MOD: try { result = nb1 % nb2; } catch (e) { err = e; }
      break;
    case Symbols.ADD: try { result = nb1 + nb2; } catch (e) { err = e; }
      break;
    case Symbols.SUB: try { result = nb1 - nb2; } catch (e) { err = e; }
      break;
    case Symbols.MUL: try { result = nb1 * nb2; } catch (e) { err = e; }
      break;
    case Symbols.DIV: try { result = nb1 / nb2; } catch (e) { err = e; }
      break;
  }
  return callback(err, result);
}

export {
  superComputer, Callback, callback, Symbols,
};
