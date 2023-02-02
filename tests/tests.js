const indexJs = require('../index');

test('Should switch to the correct function based on user choice', () => {
    const inquirerMock = {
      prompt: jest.fn().mockImplementationOnce((data) => {
        expect(data.choices).toContain('Manager');
        return Promise.resolve({ employeeType: 'Manager' });
      })
    };
    
    const managerMakerMock = jest.fn();
  
    const switchFunction = require('./index');
    switchFunction.__set__('inquirer', inquirerMock);
    switchFunction.__set__('managerMaker', managerMakerMock);
  
    switchFunction.employee();
  
    expect(inquirerMock.prompt).toHaveBeenCalled();
    expect(managerMakerMock).toHaveBeenCalled();
  });




  test('Should read and update index.html correctly adding manager card', () => {
    const inquirerMock = {
      prompt: jest.fn().mockResolvedValue({
        name: 'Jane Doe',
        id: 123,
        email: 'jane.doe@email.com',
        officeNumber: '123456'
      })
    };
  
    const fsMock = {
      readFile: jest.fn().mockImplementationOnce((file, encoding, callback) => {
        callback(null, '<body></body>');
      }),
      writeFile: jest.fn()
    };
  
    const switchFunction = require('./index');
    switchFunction.__set__('inquirer', inquirerMock);
    switchFunction.__set__('fs', fsMock);
  
    switchFunction.managerMaker();
  
    expect(inquirerMock.prompt).toHaveBeenCalled();
    expect(fsMock.readFile).toHaveBeenCalledWith('./index.html', 'utf-8', expect.any(Function));
    expect(fsMock.writeFile).toHaveBeenCalledWith('./index.html', expect.stringContaining('Jane Doe'), expect.any(Function));
  });




  test('Should read and update index.html correctly adding engineer card', () => {
    const inquirerMock = {
      prompt: jest.fn().mockResolvedValue({
        name: 'John Doe',
        id: 123,
        email: 'john.doe@email.com',
        github: 'john-doe'
      })
    };
  
    const fsMock = {
      readFile: jest.fn().mockImplementationOnce((file, encoding, callback) => {
        callback(null, '<body></body>');
      }),
      writeFile: jest.fn()
    };
  
    const switchFunction = require('./index');
    switchFunction.__set__('inquirer','inquirereMock');
    switchFunction.__set__('fs', fsMock);

    switchFunction.engineerMaker();

    expect(inquirerMock.prompt).toHaveBeenCalled();
    expect(fsMock.readFile).toHaveBeenCalledWith('./index.html', 'utf-8', expect.any(Function));
    expect(fsMock.writeFile).toHaveBeenCalledWith('./index.html', expect.stringContaining('John Doe'), expect.any(Function));


})



test('Should read and update index.html correctly adding manager card', () => {
    const inquirerMock = {
      prompt: jest.fn().mockResolvedValue({
        name: 'Lily Allen',
        id: 123,
        email: 'Lily.allen@email.com',
        school: 'Georgia Tech'
      })
    };
  
    const fsMock = {
      readFile: jest.fn().mockImplementationOnce((file, encoding, callback) => {
        callback(null, '<body></body>');
      }),
      writeFile: jest.fn()
    };
  
    const switchFunction = require('./index');
    switchFunction.__set__('inquirer', inquirerMock);
    switchFunction.__set__('fs', fsMock);
  
    switchFunction.internMaker();
  
    expect(inquirerMock.prompt).toHaveBeenCalled();
    expect(fsMock.readFile).toHaveBeenCalledWith('./index.html', 'utf-8', expect.any(Function));
    expect(fsMock.writeFile).toHaveBeenCalledWith('./index.html', expect.stringContaining('Lily Allen'), expect.any(Function));
  });
