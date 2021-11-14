### Welcome! This is a app 
##Ciphering CLI Tool! 🚀
####To run the code type in a terminal: 'node my_ciphering_cli ', after that you can write the encoding according to 
####the following rules:

```sh
1. -c, --config: config for ciphers Config is a string with pattern {XY(-)}n, where:
    X is a cipher mark:
        C - Caesar cipher (with shift 1)
        A - Atbash cipher
        R - ROT-8 cipher
```      

```sh
    Y is flag of encoding or decoding 
    (mandatory for Caesar cipher and ROT-8 cipher and should not be passed Atbash cipher)
        1 - encoding (move to the right bij alphabetic order)
        0 - decoding (move to the left bij alphabetic order)
```  

```shell
Examples: 
        -c "C1-C1-R0-A"
        --config "C1-C1-R0-A"
```

```sh
2. -i, --input: a path to input file
3. -o, --output: a path to output file
```  

####For example, config "C1-C1-R0-A" means
####"encode by Caesar cipher => encode by Caesar cipher => decode by ROT-8 => use Atbash"

```shell
For example of whole line of config:
        node my_ciphering_cli -c "C1-C1-R0-A" -i "./input.txt" -o "./output.txt"
        node my_ciphering_cli --config "C1-C1-R0-A" --input "./input.txt" --output "./output.txt"
        node my_ciphering_cli -c "C1-C1-R0-A" -i "./input.txt" 
        node my_ciphering_cli -c "C1-C1-R0-A" 

```
