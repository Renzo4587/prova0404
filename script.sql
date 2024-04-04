use senai

create table Agendamentos(
    id INT PRIMARY KEY IDENTITY,
    data_agendamento VARCHAR(10) NOT NULL,
    horario VARCHAR(10) NOT NULL,
    reserva VARCHAR(50) NOT NULL
)

select * from Agendamento
insert into Agendamento values('04_08_24', '15:00', 'negativo'),
delete from Agendamento where id = 1,