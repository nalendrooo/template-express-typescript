
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.17.0
 * Query Engine version: 393aa359c9ad4a4bb28630fb5613f9c281cde053
 */
Prisma.prismaVersion = {
  client: "5.17.0",
  engine: "393aa359c9ad4a4bb28630fb5613f9c281cde053"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UsersScalarFieldEnum = {
  gid: 'gid',
  full_name: 'full_name',
  email: 'email',
  phone: 'phone',
  school: 'school',
  user_type: 'user_type',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CourseScalarFieldEnum = {
  id: 'id',
  title: 'title',
  description: 'description',
  cover: 'cover',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  price: 'price',
  slug: 'slug'
};

exports.Prisma.CourseCreatorScalarFieldEnum = {
  id: 'id',
  courseId: 'courseId',
  userId: 'userId',
  as: 'as',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CourseLoggingScalarFieldEnum = {
  id: 'id',
  courseId: 'courseId',
  userId: 'userId',
  syllabusContentId: 'syllabusContentId',
  materialContentId: 'materialContentId',
  examId: 'examId',
  isRead: 'isRead',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CategoryScalarFieldEnum = {
  id: 'id',
  title: 'title',
  isActive: 'isActive',
  order: 'order',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  slug: 'slug'
};

exports.Prisma.SubCategoryScalarFieldEnum = {
  id: 'id',
  title: 'title',
  isActive: 'isActive',
  categoryId: 'categoryId',
  order: 'order',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  slug: 'slug'
};

exports.Prisma.TopicScalarFieldEnum = {
  id: 'id',
  title: 'title',
  isActive: 'isActive',
  subCategoryId: 'subCategoryId',
  order: 'order',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  slug: 'slug'
};

exports.Prisma.CourseTopicScalarFieldEnum = {
  id: 'id',
  courseId: 'courseId',
  topicId: 'topicId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SyllabusScalarFieldEnum = {
  id: 'id',
  title: 'title',
  description: 'description',
  courseId: 'courseId',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SyllabusContentScalarFieldEnum = {
  id: 'id',
  syllabusId: 'syllabusId',
  title: 'title',
  type: 'type',
  order: 'order',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  slug: 'slug'
};

exports.Prisma.ExamScalarFieldEnum = {
  id: 'id',
  title: 'title',
  syllabusContentId: 'syllabusContentId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  description: 'description'
};

exports.Prisma.ExamQuestionScalarFieldEnum = {
  id: 'id',
  isActive: 'isActive',
  examId: 'examId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  description: 'description',
  questionText: 'questionText',
  typeQuestion: 'typeQuestion'
};

exports.Prisma.ExamOptionQuestionScalarFieldEnum = {
  id: 'id',
  optionText: 'optionText',
  isTrue: 'isTrue',
  reason: 'reason',
  order: 'order',
  attachment: 'attachment',
  examQuestionId: 'examQuestionId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.MaterialContentTypeScalarFieldEnum = {
  id: 'id',
  title: 'title'
};

exports.Prisma.MaterialContentScalarFieldEnum = {
  id: 'id',
  title: 'title',
  materialContentTypeId: 'materialContentTypeId',
  order: 'order',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  slug: 'slug',
  syllabusContentId: 'syllabusContentId',
  estimatedTime: 'estimatedTime'
};

exports.Prisma.MaterialContentLearningScalarFieldEnum = {
  id: 'id',
  materialContentId: 'materialContentId',
  content: 'content'
};

exports.Prisma.MaterialContentTestScalarFieldEnum = {
  id: 'id',
  materialContentId: 'materialContentId'
};

exports.Prisma.MaterialContentFileScalarFieldEnum = {
  id: 'id',
  materialContentId: 'materialContentId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.MaterialContentAttachmentScalarFieldEnum = {
  id: 'id',
  thumbnail: 'thumbnail',
  path: 'path',
  materialContentId: 'materialContentId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.CourseAs = exports.$Enums.CourseAs = {
  OWNER: 'OWNER',
  COLLABORATOR: 'COLLABORATOR'
};

exports.SyllabusContentType = exports.$Enums.SyllabusContentType = {
  EXAM: 'EXAM',
  MATERIAL: 'MATERIAL'
};

exports.TypeQuestion = exports.$Enums.TypeQuestion = {
  MULTIPLE_CHOICE: 'MULTIPLE_CHOICE',
  MULTIPLE_CHOICE_COMPLEX: 'MULTIPLE_CHOICE_COMPLEX'
};

exports.TypeMaterialContent = exports.$Enums.TypeMaterialContent = {
  VIDEO: 'VIDEO',
  READING: 'READING',
  PRE_TEST: 'PRE_TEST',
  POST_TEST: 'POST_TEST'
};

exports.Prisma.ModelName = {
  Users: 'Users',
  Course: 'Course',
  CourseCreator: 'CourseCreator',
  CourseLogging: 'CourseLogging',
  Category: 'Category',
  SubCategory: 'SubCategory',
  Topic: 'Topic',
  CourseTopic: 'CourseTopic',
  Syllabus: 'Syllabus',
  SyllabusContent: 'SyllabusContent',
  Exam: 'Exam',
  ExamQuestion: 'ExamQuestion',
  ExamOptionQuestion: 'ExamOptionQuestion',
  MaterialContentType: 'MaterialContentType',
  MaterialContent: 'MaterialContent',
  MaterialContentLearning: 'MaterialContentLearning',
  MaterialContentTest: 'MaterialContentTest',
  MaterialContentFile: 'MaterialContentFile',
  MaterialContentAttachment: 'MaterialContentAttachment'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
