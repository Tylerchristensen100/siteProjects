import os

dataFile = ''
comparisonFile = ''
finalFile = ''

filePath = ''

rna = [];
labels = [];


def cleanFiles():
    global filePath
    filePath.replace('\\', '/')
    f = open('%s\stripped-%s.txt' % (filePath, dataFile), 'w')
    f.write('')
    f.close()

    final = open('%s\%s.txt' % (filePath, finalFile), 'w')
    final.write('')
    final.close()



#textFile
def prep():
    raw  = open('%s\%s.txt' % (filePath, dataFile), 'r')
    lines = raw.readlines()
    final = open('%s\stripped-%s.txt' % (filePath, dataFile), 'w')
    for line in lines:
        # print(line)
        l = line.split('      ')
        if(l.__len__() > 1):
            s = l[1].split('\t')
            # print(s[0])
            # print('\n')
            w = s[0]
            final.write(cleanDashes(w))
    final.close()

def cleanDashes(line):
        if(line.__contains__('--------------')):
             return ''
        else:
            return line + '\n'




#compare.txt
def prepCompare():
    prep()
    f = open('%s\%s.txt' % (filePath, comparisonFile), 'r')
    lines = f.readlines()
    for line in lines:
      if(line[0] == '>'):
        labels.append(line)
      else:
        rna.append(line)
    f.close()

    # print('labels')
    # print(labels)
    # print('rna')
    # print(rna)




def compare():
    print('Working........')
    f = open('%s\stripped-%s.txt' % (filePath, dataFile), 'r')
    fC = open('%s\%s.txt' % (filePath, finalFile), 'w')
    lines = f.readlines()
    count = 0
    for line in lines:
        for i in rna:
            if(i.find(line) != -1):
                # print(i + "     count:    " + count.__str__())
                # print(line)
                # print('\n')
                if(count <= len(labels)):
                    fC.write(labels[count-1])
                    fC.write(i)
                    fC.write('\n')
                count += 1
    f.close()
    fC.close()
                




def main():
    global dataFile
    global comparisonFile
    global finalFile
    global filePath
    filePath = input('What is the ABSOLUTE path to the folder?')
    
    dataFile = input('What is the name of the data file?\n')
    
    comparisonFile = input('What is the name comparison file?\n')

    finalFile = input('What do you want to name the final file?\n')
    print('\n\n\n\n')
    cleanFiles()
    prepCompare()
    compare()
    

main()

            