import { Query } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { Employee } from './employee.entity';
import { EmployeeService } from './employee.service';

@Resolver('Employee')
export class EmployeeResolver {
  constructor(private readonly employeeService: EmployeeService) {}


  @Mutation(() => Employee)
  async createEmployee(
    @Args('data') data: CreateEmployeeInput
  ): Promise<Employee> {
    const employee = await this.employeeService.createEmployee(data);
    return employee;
  }

  // @Mutation(() => Employee)
  // async updateEmployee(
  //   @Args('id') id: string,
  //   @Args('data') data: UpdateEmployeeInput,
  // ): Promise<Employee> {
  //   return this.employeeService.updateEmployee({ id, ...data });
  // }

}
