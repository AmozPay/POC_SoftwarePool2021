enum symbols {
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

function superComputer(nb1: number, sym: symbols, nb2: number, callback: Callback) {
  let result;
  let err;
  switch (sym) {
    case symbols.MOD: try { result = nb1 % nb2; } catch (e) { err = e; }
      break;
    case symbols.ADD: try { result = nb1 + nb2; } catch (e) { err = e; }
      break;
    case symbols.SUB: try { result = nb1 - nb2; } catch (e) { err = e; }
      break;
    case symbols.MUL: try { result = nb1 * nb2; } catch (e) { err = e; }
      break;
    case symbols.DIV: try { result = nb1 / nb2; } catch (e) { err = e; }
      break;
    default: return 'Wrong operator';
  }
  return callback(err, result);
}

superComputer(100, symbols.ADD, 0, callback);
