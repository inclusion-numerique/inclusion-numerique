// https://registry.terraform.io/providers/scaleway/scaleway/2.28.0/docs/resources/container_trigger
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContainerTriggerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the container to create a trigger for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scaleway/scaleway/2.28.0/docs/resources/container_trigger#container_id ContainerTrigger#container_id}
  */
  readonly containerId: string;
  /**
  * The trigger description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scaleway/scaleway/2.28.0/docs/resources/container_trigger#description ContainerTrigger#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scaleway/scaleway/2.28.0/docs/resources/container_trigger#id ContainerTrigger#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The trigger name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scaleway/scaleway/2.28.0/docs/resources/container_trigger#name ContainerTrigger#name}
  */
  readonly name?: string;
  /**
  * The region you want to attach the resource to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scaleway/scaleway/2.28.0/docs/resources/container_trigger#region ContainerTrigger#region}
  */
  readonly region?: string;
  /**
  * sqs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scaleway/scaleway/2.28.0/docs/resources/container_trigger#sqs ContainerTrigger#sqs}
  */
  readonly sqs?: ContainerTriggerSqs;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scaleway/scaleway/2.28.0/docs/resources/container_trigger#timeouts ContainerTrigger#timeouts}
  */
  readonly timeouts?: ContainerTriggerTimeouts;
}
export interface ContainerTriggerSqs {
  /**
  * ID of the mnq namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scaleway/scaleway/2.28.0/docs/resources/container_trigger#namespace_id ContainerTrigger#namespace_id}
  */
  readonly namespaceId: string;
  /**
  * Project ID of the project where the mnq sqs exists, defaults to provider project_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scaleway/scaleway/2.28.0/docs/resources/container_trigger#project_id ContainerTrigger#project_id}
  */
  readonly projectId?: string;
  /**
  * Name of the queue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scaleway/scaleway/2.28.0/docs/resources/container_trigger#queue ContainerTrigger#queue}
  */
  readonly queue: string;
  /**
  * Region where the mnq sqs exists, defaults to function's region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scaleway/scaleway/2.28.0/docs/resources/container_trigger#region ContainerTrigger#region}
  */
  readonly region?: string;
}

export function containerTriggerSqsToTerraform(struct?: ContainerTriggerSqsOutputReference | ContainerTriggerSqs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace_id: cdktf.stringToTerraform(struct!.namespaceId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    queue: cdktf.stringToTerraform(struct!.queue),
    region: cdktf.stringToTerraform(struct!.region),
  }
}

export class ContainerTriggerSqsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerTriggerSqs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceId = this._namespaceId;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._queue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queue = this._queue;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerTriggerSqs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._namespaceId = undefined;
      this._projectId = undefined;
      this._queue = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._namespaceId = value.namespaceId;
      this._projectId = value.projectId;
      this._queue = value.queue;
      this._region = value.region;
    }
  }

  // namespace_id - computed: false, optional: false, required: true
  private _namespaceId?: string; 
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }
  public set namespaceId(value: string) {
    this._namespaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceIdInput() {
    return this._namespaceId;
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // queue - computed: false, optional: false, required: true
  private _queue?: string; 
  public get queue() {
    return this.getStringAttribute('queue');
  }
  public set queue(value: string) {
    this._queue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queueInput() {
    return this._queue;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface ContainerTriggerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scaleway/scaleway/2.28.0/docs/resources/container_trigger#create ContainerTrigger#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scaleway/scaleway/2.28.0/docs/resources/container_trigger#default ContainerTrigger#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scaleway/scaleway/2.28.0/docs/resources/container_trigger#delete ContainerTrigger#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scaleway/scaleway/2.28.0/docs/resources/container_trigger#read ContainerTrigger#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scaleway/scaleway/2.28.0/docs/resources/container_trigger#update ContainerTrigger#update}
  */
  readonly update?: string;
}

export function containerTriggerTimeoutsToTerraform(struct?: ContainerTriggerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class ContainerTriggerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ContainerTriggerTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerTriggerTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._default = value.default;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/scaleway/scaleway/2.28.0/docs/resources/container_trigger scaleway_container_trigger}
*/
export class ContainerTrigger extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scaleway_container_trigger";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/scaleway/scaleway/2.28.0/docs/resources/container_trigger scaleway_container_trigger} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContainerTriggerConfig
  */
  public constructor(scope: Construct, id: string, config: ContainerTriggerConfig) {
    super(scope, id, {
      terraformResourceType: 'scaleway_container_trigger',
      terraformGeneratorMetadata: {
        providerName: 'scaleway',
        providerVersion: '2.28.0',
        providerVersionConstraint: '>= 2.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._containerId = config.containerId;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._sqs.internalValue = config.sqs;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // container_id - computed: false, optional: false, required: true
  private _containerId?: string; 
  public get containerId() {
    return this.getStringAttribute('container_id');
  }
  public set containerId(value: string) {
    this._containerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerIdInput() {
    return this._containerId;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // sqs - computed: false, optional: true, required: false
  private _sqs = new ContainerTriggerSqsOutputReference(this, "sqs");
  public get sqs() {
    return this._sqs;
  }
  public putSqs(value: ContainerTriggerSqs) {
    this._sqs.internalValue = value;
  }
  public resetSqs() {
    this._sqs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqsInput() {
    return this._sqs.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ContainerTriggerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ContainerTriggerTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      container_id: cdktf.stringToTerraform(this._containerId),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      sqs: containerTriggerSqsToTerraform(this._sqs.internalValue),
      timeouts: containerTriggerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}