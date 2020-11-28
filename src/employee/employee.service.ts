import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { Employee } from './employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>
  ) {}

  async findAllEmployees() : Promise<Employee[]> {
    const employees = await this.employeeRepository.find();
    return employees;
  }


  async createEmployee(data: CreateEmployeeInput): Promise<Employee> {
    const employee = this.employeeRepository.create(data);
    const employeeSaved = await this.employeeRepository.save(employee);
    if(!employeeSaved) {
      throw new InternalServerErrorException('Erro ao salvar.')
    }
    return employeeSaved;
  }

  // async updateEmployee(data: UpdateEmployeeInput): Promise<Employee> {
  //   const user = await this.getEmployeeById(data.id);
  //   return this.employeeRepository.save({ ...user, ...data });
  // }



}
