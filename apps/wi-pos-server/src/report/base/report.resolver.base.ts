/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Report } from "./Report";
import { ReportCountArgs } from "./ReportCountArgs";
import { ReportFindManyArgs } from "./ReportFindManyArgs";
import { ReportFindUniqueArgs } from "./ReportFindUniqueArgs";
import { DeleteReportArgs } from "./DeleteReportArgs";
import { ReportService } from "../report.service";
@graphql.Resolver(() => Report)
export class ReportResolverBase {
  constructor(protected readonly service: ReportService) {}

  async _reportsMeta(
    @graphql.Args() args: ReportCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Report])
  async reports(@graphql.Args() args: ReportFindManyArgs): Promise<Report[]> {
    return this.service.reports(args);
  }

  @graphql.Query(() => Report, { nullable: true })
  async report(
    @graphql.Args() args: ReportFindUniqueArgs
  ): Promise<Report | null> {
    const result = await this.service.report(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Report)
  async deleteReport(
    @graphql.Args() args: DeleteReportArgs
  ): Promise<Report | null> {
    try {
      return await this.service.deleteReport(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
