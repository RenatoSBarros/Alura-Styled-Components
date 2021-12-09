import React from 'react';
import { Box , Button , TextButton } from '../Ui';
import { extratoLista } from '../../info'
import Itens from '../Itens/itens';

const Extrato = () => {

    return (
        <Box>
            {
                extratoLista.updates.map(({id , type , from , value , date}) => {
                    return (
                        <Itens key= {id} type={type} from={from} value={value} date={date} />
                    )
                })
            }
            <Button>
               <TextButton>
                   Ver Mais
               </TextButton>    
            </Button>
        </Box>
    );
};

export default Extrato
