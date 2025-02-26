var model_data = {
  /////////////////////////////////////////////////////////////////////////
  basic:
      '[request_definition]\n' +
      'r = sub, obj, act\n' +
      '\n' +
      '[policy_definition]\n' +
      'p = sub, obj, act\n' +
      '\n' +
      '[policy_effect]\n' +
      'e = some(where (p.eft == allow))\n' +
      '\n' +
      '[matchers]\n' +
      'm = r.sub == p.sub && r.obj == p.obj && r.act == p.act',
  /////////////////////////////////////////////////////////////////////////
  basic_with_root:
      '[request_definition]\n' +
      'r = sub, obj, act\n' +
      '\n' +
      '[policy_definition]\n' +
      'p = sub, obj, act\n' +
      '\n' +
      '[policy_effect]\n' +
      'e = some(where (p.eft == allow))\n' +
      '\n' +
      '[matchers]\n' +
      'm = r.sub == p.sub && r.obj == p.obj && r.act == p.act || r.sub == "root"',
  /////////////////////////////////////////////////////////////////////////
  basic_without_resources:
      '[request_definition]\n' +
      'r = sub, act\n' +
      '\n' +
      '[policy_definition]\n' +
      'p = sub, act\n' +
      '\n' +
      '[policy_effect]\n' +
      'e = some(where (p.eft == allow))\n' +
      '\n' +
      '[matchers]\n' +
      'm = r.sub == p.sub && r.act == p.act',
  /////////////////////////////////////////////////////////////////////////
  basic_without_users:
      '[request_definition]\n' +
      'r = obj, act\n' +
      '\n' +
      '[policy_definition]\n' +
      'p = obj, act\n' +
      '\n' +
      '[policy_effect]\n' +
      'e = some(where (p.eft == allow))\n' +
      '\n' +
      '[matchers]\n' +
      'm = r.obj == p.obj && r.act == p.act',
  /////////////////////////////////////////////////////////////////////////
  rbac:
      '[request_definition]\n' +
      'r = sub, obj, act\n' +
      '\n' +
      '[policy_definition]\n' +
      'p = sub, obj, act\n' +
      '\n' +
      '[role_definition]\n' +
      'g = _, _\n' +
      '\n' +
      '[policy_effect]\n' +
      'e = some(where (p.eft == allow))\n' +
      '\n' +
      '[matchers]\n' +
      'm = g(r.sub, p.sub) && r.obj == p.obj && r.act == p.act',
  /////////////////////////////////////////////////////////////////////////
  rbac_with_resource_roles:
      '[request_definition]\n' +
      'r = sub, obj, act\n' +
      '\n' +
      '[policy_definition]\n' +
      'p = sub, obj, act\n' +
      '\n' +
      '[role_definition]\n' +
      'g = _, _\n' +
      'g2 = _, _\n' +
      '\n' +
      '[policy_effect]\n' +
      'e = some(where (p.eft == allow))\n' +
      '\n' +
      '[matchers]\n' +
      'm = g(r.sub, p.sub) && g2(r.obj, p.obj) && r.act == p.act',
  /////////////////////////////////////////////////////////////////////////
  rbac_with_domains:
      '[request_definition]\n' +
      'r = sub, dom, obj, act\n' +
      '\n' +
      '[policy_definition]\n' +
      'p = sub, dom, obj, act\n' +
      '\n' +
      '[role_definition]\n' +
      'g = _, _, _\n' +
      '\n' +
      '[policy_effect]\n' +
      'e = some(where (p.eft == allow))\n' +
      '\n' +
      '[matchers]\n' +
      'm = g(r.sub, p.sub, r.dom) && r.dom == p.dom && r.obj == p.obj && r.act == p.act',
  /////////////////////////////////////////////////////////////////////////
  rbac_with_deny:
      '[request_definition]\n' +
      'r = sub, obj, act\n' +
      '\n' +
      '[policy_definition]\n' +
      'p = sub, obj, act, eft\n' +
      '\n' +
      '[role_definition]\n' +
      'g = _, _\n' +
      '\n' +
      '[policy_effect]\n' +
      'e = some(where (p.eft == allow)) && !some(where (p.eft == deny))\n' +
      '\n' +
      '[matchers]\n' +
      'm = g(r.sub, p.sub) && r.obj == p.obj && r.act == p.act',
  /////////////////////////////////////////////////////////////////////////
  abac:
      '[request_definition]\n' +
      'r = sub, obj, act\n' +
      '\n' +
      '[policy_definition]\n' +
      'p = sub, obj, act\n' +
      '\n' +
      '[policy_effect]\n' +
      'e = some(where (p.eft == allow))\n' +
      '\n' +
      '[matchers]\n' +
      'm = r.sub == r.obj.Owner',
  /////////////////////////////////////////////////////////////////////////
  keymatch:
      '[request_definition]\n' +
      'r = sub, obj, act\n' +
      '\n' +
      '[policy_definition]\n' +
      'p = sub, obj, act\n' +
      '\n' +
      '[policy_effect]\n' +
      'e = some(where (p.eft == allow))\n' +
      '\n' +
      '[matchers]\n' +
      'm = r.sub == p.sub && keyMatch(r.obj, p.obj) && regexMatch(r.act, p.act)',
  /////////////////////////////////////////////////////////////////////////
  keymatch2:
      '[request_definition]\n' +
      'r = sub, obj, act\n' +
      '\n' +
      '[policy_definition]\n' +
      'p = sub, obj, act\n' +
      '\n' +
      '[policy_effect]\n' +
      'e = some(where (p.eft == allow))\n' +
      '\n' +
      '[matchers]\n' +
      'm = r.sub == p.sub && keyMatch2(r.obj, p.obj) && regexMatch(r.act, p.act)',
  /////////////////////////////////////////////////////////////////////////
  ipmatch:
      '[request_definition]\n' +
      'r = sub, obj, act\n' +
      '\n' +
      '[policy_definition]\n' +
      'p = sub, obj, act\n' +
      '\n' +
      '[policy_effect]\n' +
      'e = some(where (p.eft == allow))\n' +
      '\n' +
      '[matchers]\n' +
      'm = ipMatch(r.sub, p.sub) && r.obj == p.obj && r.act == p.act',
  /////////////////////////////////////////////////////////////////////////
  priority:
      '[request_definition]\n' +
      'r = sub, obj, act\n' +
      '\n' +
      '[policy_definition]\n' +
      'p = sub, obj, act, eft\n' +
      '\n' +
      '[role_definition]\n' +
      'g = _, _\n' +
      '\n' +
      '[policy_effect]\n' +
      'e = priority(p.eft) || deny\n' +
      '\n' +
      '[matchers]\n' +
      'm = g(r.sub, p.sub) && r.obj == p.obj && r.act == p.act',
  /////////////////////////////////////////////////////////////////////////
};
var test_data = {
  basic: {
    params: 'alice, data1, read',
    return: 'true',
  },
  basic_with_root: {
    params: 'alice, data1, read',
    return: 'true',
  },
  basic_without_resources: {
    params: 'alice, read',
    return: 'true',
  },
  basic_without_users: {
    params: 'data1, read',
    return: 'true',
  },
  rbac: {
    params: 'alice, data2, read',
    return: 'true',
  },
  rbac_with_resource_roles: {
    params:
        'alice, data1, read\n' +
        'alice, data1, write\n' +
        'alice, data2, read\n' +
        'alice, data2, write ',
    return: 'true\ntrue\nfalse\ntrue',
  },
  rbac_with_domains: {
    params: 'alice, domain1, data1, read',
    return: 'true',
  },
  rbac_with_deny: {
    params: 'alice, data1, read\n' + 'alice, data2, write',
    return: 'true\nfalse',
  },
  abac: {
    params: 'Not support',
    return: 'false',
  },
  keymatch: {
    params: 'alice, /alice_data/hello, GET',
    return: 'false',
  },
  keymatch2: {
    params:
        'alice, /alice_data/hello, GET\n' + 'alice, /alice_data/hello, POST',
    return: 'true\nfalse',
  },
  ipmatch: {
    params: 'Not support',
    return: 'false',
  },
  priority: {
    params: 'alice, data1, read',
    return: 'true',
  },
};
var policy_data = {
  /////////////////////////////////////////////////////////////////////////
  basic: 'p, alice, data1, read\n' + 'p, bob, data2, write',
  /////////////////////////////////////////////////////////////////////////
  basic_with_root: 'p, alice, data1, read\n' + 'p, bob, data2, write',
  /////////////////////////////////////////////////////////////////////////
  basic_without_resources: 'p, alice, read\n' + 'p, bob, write',
  /////////////////////////////////////////////////////////////////////////
  basic_without_users: 'p, data1, read\n' + 'p, data2, write',
  /////////////////////////////////////////////////////////////////////////
  rbac:
      'p, alice, data1, read\n' +
      'p, bob, data2, write\n' +
      'p, data2_admin, data2, read\n' +
      'p, data2_admin, data2, write\n' +
      '\n' +
      'g, alice, data2_admin',
  /////////////////////////////////////////////////////////////////////////
  rbac_with_resource_roles:
      'p, alice, data1, read\n' +
      'p, bob, data2, write\n' +
      'p, data_group_admin, data_group, write\n' +
      '\n' +
      'g, alice, data_group_admin\n' +
      'g2, data1, data_group\n' +
      'g2, data2, data_group',
  /////////////////////////////////////////////////////////////////////////
  rbac_with_domains:
      'p, admin, domain1, data1, read\n' +
      'p, admin, domain1, data1, write\n' +
      'p, admin, domain2, data2, read\n' +
      'p, admin, domain2, data2, write\n' +
      '\n' +
      'g, alice, admin, domain1\n' +
      'g, bob, admin, domain2',
  /////////////////////////////////////////////////////////////////////////
  rbac_with_deny:
      'p, alice, data1, read, allow\n' +
      'p, bob, data2, write, allow\n' +
      'p, data2_admin, data2, read, allow\n' +
      'p, data2_admin, data2, write, allow\n' +
      'p, alice, data2, write, deny\n' +
      '\n' +
      'g, alice, data2_admin',
  /////////////////////////////////////////////////////////////////////////
  abac: '',
  /////////////////////////////////////////////////////////////////////////
  keymatch:
      'p, alice, /alice_data/*, GET\n' +
      'p, alice, /alice_data/resource1, POST\n' +
      '\n' +
      'p, bob, /alice_data/resource2, GET\n' +
      'p, bob, /bob_data/*, POST\n' +
      '\n' +
      'p, cathy, /cathy_data, (GET)|(POST)',
  /////////////////////////////////////////////////////////////////////////
  keymatch2:
      'p, alice, /alice_data/:resource, GET\n' +
      'p, alice, /alice_data2/:id/using/:resId, GET',
  /////////////////////////////////////////////////////////////////////////
  ipmatch: 'p, 192.168.2.0/24, data1, read\n' + 'p, 10.0.0.0/16, data2, write',
  /////////////////////////////////////////////////////////////////////////
  priority:
      'p, alice, data1, read, allow\n' +
      'p, data1_deny_group, data1, read, deny\n' +
      'p, data1_deny_group, data1, write, deny\n' +
      'p, alice, data1, write, allow\n' +
      '\n' +
      'g, alice, data1_deny_group\n' +
      '\n' +
      'p, data2_allow_group, data2, read, allow\n' +
      'p, bob, data2, read, deny\n' +
      'p, bob, data2, write, deny\n' +
      '\n' +
      'g, bob, data2_allow_group',
  /////////////////////////////////////////////////////////////////////////
};

var exampleSwitch = document.getElementById('example-switch');

var modelEditor = CodeMirror.fromTextArea(document.getElementById('model'), {
  lineNumbers: true,
  indentUnit: 4,
  styleActiveLine: true,
  matchBrackets: true,
  mode: 'casbin-conf',
  lineWrapping: true,
  theme: 'monokai',
});
modelEditor.on('change', function(cm, change) {
  setConfigToCache(exampleSwitch.value + '_model', cm.getValue());
});

var policyEditor = CodeMirror.fromTextArea(document.getElementById('policy'), {
  lineNumbers: true,
  indentUnit: 4,
  styleActiveLine: true,
  matchBrackets: true,
  mode: 'casbin-csv',
  lineWrapping: true,
  theme: 'monokai',
});
policyEditor.on('change', function(cm, change) {
  setConfigToCache(exampleSwitch.value + '_policy', cm.getValue());
});

var testEditor = CodeMirror.fromTextArea(document.getElementById('test'), {
  lineNumbers: true,
  indentUnit: 4,
  styleActiveLine: true,
  matchBrackets: true,
  mode: 'casbin-csv',
  lineWrapping: true,
  theme: 'monokai',
});
testEditor.on('change', function(cm, change) {
  setConfigToCache(exampleSwitch.value + '_request', cm.getValue());
});

var functionEditor = CodeMirror.fromTextArea(
    document.getElementById('custom-function'), {
      lineNumbers: true,
      indentUnit: 4,
      styleActiveLine: true,
      matchBrackets: true,
      mode: 'javascript',
      lineWrapping: true,
      theme: 'monokai',
    });
functionEditor.on('change', function(cm, change) {
  setConfigToCache(exampleSwitch.value + '_function', cm.getValue());
});

var testResultEditor = CodeMirror.fromTextArea(
    document.getElementById('test-result'),
    {
      // lineNumbers: true,
      readOnly: true,
      indentUnit: 4,
      styleActiveLine: true,
      matchBrackets: true,
      mode: 'javascript',
      lineWrapping: true,
      theme: 'monokai',
    },
);
testResultEditor.on('change', function(cm, change) {
  setConfigToCache(exampleSwitch.value + '_result', cm.getValue());
});

function getModel(key) {
  return localStorage.getItem(key + '_model') || model_data[key];
}

function getPolicy(key) {
  return localStorage.getItem(key + '_policy') || policy_data[key];
}

function getRequest(key) {
  return localStorage.getItem(key + '_request') || test_data[key].params;
}

function getTestResult(key) {
  return localStorage.getItem(key + '_result') || test_data[key].return;
}

function getCustomFunction(key) {
  var defaultFunction = `var fns = {}`;
  return localStorage.getItem(key + '_function') || defaultFunction;
}

var switchKey = 'example-switch';

var key = localStorage.getItem(switchKey) || 'basic';

function setConfigToCache(key, value) {
  localStorage.setItem(key, value);
}

function updateEditorData(key) {
  setConfigToCache(switchKey, key);
  modelEditor.setValue(getModel(key));
  policyEditor.setValue(getPolicy(key));
  testResultEditor.setValue(getTestResult(key));
  testEditor.setValue(getRequest(key));
  functionEditor.setValue(getCustomFunction(key));
}

function reset() {
  var key = exampleSwitch.value;
  localStorage.removeItem(key + '_model');
  localStorage.removeItem(key + '_policy');
  localStorage.removeItem(key + '_request');
  localStorage.removeItem(key + '_result');
  localStorage.removeItem(key + '_function');
  updateEditorData(key);
  var resetResultNode = document.getElementById('reset-result');
  resetResultNode.innerText = 'SUCCESS.';
  setTimeout(() => {
    resetResultNode.innerText = '';
  }, 3000);
}

document.getElementById('reset').addEventListener('click', function() {
  reset();
});

exampleSwitch.addEventListener('change', function() {
  updateEditorData(this.value);
});

updateEditorData(key);



var output = document.getElementById('output');

function writeToOutput(text, error) {
  output.innerText = text;
  if (error) {
    output.style.color = '#ff0000';
  } else {
    output.style = null;
  }
}

var customFunctionBody = document.getElementById('custom-function-body');

customFunctionBody.style.display = 'none';

document.getElementById('custom-function-btn').
    addEventListener('click', function() {
      if (customFunctionBody.style.display === 'none') {
        customFunctionBody.style.display = '';
      } else {
        customFunctionBody.style.display = 'none';
      }
    });

document.getElementById('run-test').addEventListener('click', function() {
  var startTime = performance.now();
  var policyString = policyEditor.getValue();
  var policy = policyString.split('\n');
  testResultEditor.setValue('');
  try {
    var model = modelEditor.getValue();
    casbin.newEnforcer(
        casbin.newModel(model),
        new casbin.MemoryAdapter(policy),
    ).then(e => {
      if (functionEditor.getValue()) {
        try {
          eval(`${functionEditor.getValue()}`);

          if (fns) {
            Object.keys(fns).forEach(key => e.addFunction(key, fns[key]));
          }
        } catch (e) {
          writeToOutput(
              'Error: Please check syntax in Custom Function Editor.');
          return;
        }
      }

      try {
        for (var n of  testEditor.getValue().split('\n')) {
          var p = n.split(',').map(n => n.trim()).filter(n => n);

          if (!p || p.length === 0) {
            testResultEditor.setValue(testResultEditor.getValue() + '\n');
            return;
          }

          const ok = e.enforce(...p);
          testResultEditor.setValue(testResultEditor.getValue() + ok + '\n');
        }
      } catch (e) {
        writeToOutput(e, true);
        return;
      }

      var stopTime = performance.now();
      output.innerText =
          '✨ Done in ' + ((stopTime - startTime) / 1000.0).toFixed(2) + 's.';
      output.style = null;
    });
  } catch (e) {
    writeToOutput(e, true);
  }
});

document.getElementById('validate').addEventListener('click', function() {
  modelEditor.removeLineClass(errorLine - 1, 'background');
  try {
    validateModel(modelEditor.getValue());
    writeToOutput('✅ No Error.');
  } catch (e) {
    writeToOutput(e, true);
  }
});

let errorLine = 0;

function highlightErrorLine(editor, lineNumber) {
  errorLine = lineNumber;
  const actualLineNumber = lineNumber - 1;
  editor.addLineClass(actualLineNumber, 'background', 'line-error');
}

function validateModel(data) {
  const DEFAULT_SECTION = 'default';
  const DEFAULT_COMMENT = '#';
  const DEFAULT_COMMENT_SEM = ';';
  const DEFAULT_MULTI_LINE_SEPARATOR = '\\';

  const lines = data.split('\n');
  const linesCount = lines.length;
  let section = '';
  let currentLine = '';

  lines.forEach((n, index) => {
    const line = n.trim();
    const lineNumber = index + 1;
    if (!line) {
      return;
    }

    if (
        line.startsWith(DEFAULT_COMMENT) ||
        line.startsWith(DEFAULT_COMMENT_SEM)
    ) {
      return;
    } else if (line.startsWith('[') && line.endsWith(']')) {
      if (currentLine.length !== 0) {
        write(section, lineNumber - 1, currentLine);
        currentLine = '';
      }
      section = line.substring(1, line.length - 1);
    } else {
      let shouldWrite = false;
      if (line.includes(DEFAULT_MULTI_LINE_SEPARATOR)) {
        currentLine += line.substring(0, line.length - 1).trim();
        // when the last line has a "\" string
        if (lineNumber + 1 === linesCount) {
          shouldWrite = true;
        }
      } else {
        currentLine += line;
        shouldWrite = true;
      }
      if (shouldWrite) {
        write(section, lineNumber, currentLine);
        currentLine = '';
      }
    }
  });
}

function write(section, lineNum, line) {
  const equalIndex = line.indexOf('=');
  if (equalIndex === -1) {
    highlightErrorLine(modelEditor, lineNum);
    throw `Error: parse the content error in line ${lineNum}.`;
  } else {
    if (section === 'policy_effect') {
      var effectors = [
        'e = some(where (p.eft == allow))',
        'e = !some(where (p.eft == deny))',
        'e = some(where (p.eft == allow)) && !some(where (p.eft == deny))' +
        'e = priority(p.eft) || deny',
      ];
      var effectorError =
          'Error: Casbin doesn\'t support this policy effect, see https://casbin.org/docs/en/syntax-for-models#policy-effect for more details.';
      var has = effectors.some(n => n.trim() === line.trim());
      if (!has) {
        throw effectorError;
      }
    }
  }
}
