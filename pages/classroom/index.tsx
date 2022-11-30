import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { FormEvent, useState } from 'react';
export default function ClassRoom() {
   
  const    [description, setDescription]=useState<string>("");
  const    [startDate, setStartDate]=useState<Date>();
  const    [endDate, setEndDate]=useState<Date>();
  
  const [displayBasic, setDispayBasic]= useState(false);

  const handleCreateClassroomSubmit = (event: FormEvent<HTMLFormElement> )=> {
      console.log("tentou criar turma");
  };
  const onClick = ()=> {
      setDispayBasic(true);
  }
  const onHide = () => {
      setDispayBasic(false);
  }
  const renderFooter = () => {
      return (
          <div>
              <Button label="Cancelar" icon="pi pi-times" onClick={() => onHide()} className="p-button-text" />
              <Button label="Confirmar" icon="pi pi-check" onClick={() => onHide()} autoFocus />
          </div>
      );
  }

  return <>
      <div className='p-5'>
        <Button label="Criar Turma" icon="pi pi-plus" onClick={() => onClick()} />
      </div>
      <Dialog header="Criar nova turma" visible={displayBasic} breakpoints={{'960px': '75vw'}} 
                  style={{width: '50vw'}}onHide={() => onHide()} footer={renderFooter()}>
          <form 
          id="create-classroom"
          className="grid flex-column"
          onSubmit={handleCreateClassroomSubmit}>
              <div className="field p-inputgroup mt-6">
                  <span className="p-inputgroup-addon">
                      <i className="pi pi-pencil"></i>
                  </span>
                  <span className="p-float-label">
                      <InputText
                          id="description"
                          value={description}
                          required
                          name="description"
                          onChange={(e) => setDescription(e.target.value)}
                      />
                      <label htmlFor="description">Nome da turma</label>
                  </span>
              </div>
              <div className="field p-inputgroup mt-4">
                  <span className="p-inputgroup-addon">
                  <i className="pi pi-calendar"></i>
                  </span>
                  <span className="p-float-label">
                      <Calendar value={startDate} onChange={(e) => {
                        if (e.value)
                          setStartDate(e.value as Date)}}/>
                      <label htmlFor="startDate">Data de início</label>
                  </span>
              </div>
              <div className="field p-inputgroup mt-4">
                  <span className="p-inputgroup-addon">
                  <i className="pi pi-calendar-times"></i>
                  </span>
                  <span className="p-float-label">
                  <Calendar value={endDate} onChange={(e) => {
                        if (e.value)
                          setEndDate(e.value as Date)}}/>
                      <label htmlFor="endDate">Data de fim</label>
                  </span>
              </div>    
          </form>
      </Dialog>
  </>;
  
}
