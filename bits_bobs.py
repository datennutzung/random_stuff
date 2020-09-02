class Logger():
    def __init__(self):
        self.__log = ""
    

    def getLog(self):
        return self.__log


    def setLog(self, log):
        self.__log = log

    
    def appendLog(self, log_append):
        self.__log += log_append

    
    def log(self, *values, sep=" ", end="\n"):
        values = [str(value) for value in values]
        ret=sep.join(values)+end
        print(ret, end="")
        self.appendLog(ret)
        return ret


def input_or_default(prompt=None, default=None, password=False):
    import getpass
    if password:
        retval = getpass.getpass(prompt)
    else:
        retval = input(prompt)
    if retval:
        return retval
    return default

def input_bool(prompt, true_string="y", false_string="n") -> bool:
    while True:
        input_string = input(prompt+" ("+true_string+"/"+false_string+") ")
        if input_string == true_string:
            return True
        if input_string == false_string:
            return False

def force_input(prompt = "", fail_message = "", fail_cond = lambda a: a):
    ret = input(prompt)
    while fail_cond(ret):
        ret = input(fail_message)
    return ret

def delete_lines_from_file(lines_to_delete: list, file_path: str):
    f = open(file_path, 'r').readlines()
    for i in range(len(f), 0, -1):
        if i in lines_to_delete:
            f = f[:i-1] + f[i:]
    open(file_path, "w").writelines(f)